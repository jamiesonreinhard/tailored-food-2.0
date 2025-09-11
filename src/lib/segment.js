let analytics = null;
let isInitialized = false;
let initializationPromise = null;

export const initSegment = async () => {
  if (initializationPromise) return initializationPromise;
  
  if (isInitialized) return Promise.resolve();

  initializationPromise = new Promise((resolve) => {
    // Load analytics.js
    if (typeof window !== 'undefined') {
      analytics = window.analytics = window.analytics || [];

      if (!analytics.initialize) {
        if (analytics.invoked) {
          window.console && console.error && console.error('Segment snippet included twice.');
          resolve();
        } else {
          analytics.invoked = true;
          analytics.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on',
            'addSourceMiddleware',
            'addIntegrationMiddleware',
            'setAnonymousId',
            'addDestinationMiddleware',
          ];
          analytics.factory = function (method) {
            return function () {
              const args = Array.prototype.slice.call(arguments);
              args.unshift(method);
              analytics.push(args);
              return analytics;
            };
          };
          for (let i = 0; i < analytics.methods.length; i++) {
            const key = analytics.methods[i];
            analytics[key] = analytics.factory(key);
          }
          analytics.load = function (key, options) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js';
            const first = document.getElementsByTagName('script')[0];
            first.parentNode.insertBefore(script, first);
            analytics._loadOptions = options;
          };

          // Wait for analytics to be ready
          analytics.ready(() => {
            isInitialized = true;
            resolve();
          });

          analytics._writeKey = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY;
          analytics.load(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY);
        }
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });

  return initializationPromise;
};

const getSegmentContext = () => ({
  page: {
    url: typeof window !== 'undefined' ? window.location.href : '',
    path: typeof window !== 'undefined' ? window.location.pathname : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  },
});

export const identifyUser = async (userId, traits = {}) => {
  await initSegment();
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.identify(userId, traits, getSegmentContext());
  }
};

export const trackPageView = async (pageName = null, properties = {}) => {
  await initSegment();
  if (typeof window !== 'undefined' && window.analytics) {
    const title = pageName || (typeof document !== 'undefined' ? document.title : '');
    window.analytics.page(title, properties, getSegmentContext());
  }
};

export const trackEvent = async (eventName, properties = {}) => {
  await initSegment();
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track(eventName, properties, getSegmentContext());
  }
};

let pageStartTime = null;
let currentPageName = null;

export const startPageTimer = (pageName) => {
  if (typeof window !== 'undefined') {
    pageStartTime = Date.now();
    currentPageName = pageName;
  }
};

export const stopPageTimer = async () => {
  if (typeof window !== 'undefined' && pageStartTime && currentPageName) {
    const timeSpent = Date.now() - pageStartTime;
    
    await trackEvent('Page Time Spent', {
      page_name: currentPageName,
      time_spent_seconds: Math.round(timeSpent / 1000),
      time_spent_milliseconds: timeSpent,
      url: window.location.href,
      pathname: window.location.pathname
    });
    
    pageStartTime = null;
    currentPageName = null;
  }
};

export const trackPageEntry = async (pageName, additionalProperties = {}) => {
  await initSegment();
  startPageTimer(pageName);
  
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track('Page Entered', {
      page_name: pageName,
      timestamp: new Date().toISOString(),
      ...additionalProperties,
      ...getSegmentContext()
    });
  }
};

export const trackPageExit = async (pageName, additionalProperties = {}) => {
  await stopPageTimer();
  
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track('Page Exited', {
      page_name: pageName,
      timestamp: new Date().toISOString(),
      ...additionalProperties,
      ...getSegmentContext()
    });
  }
}; 