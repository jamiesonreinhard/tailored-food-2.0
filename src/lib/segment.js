let analytics = null;
let isInitialized = false;

export const initSegment = async () => {
  if (isInitialized) return;

  // Load analytics.js
  if (typeof window !== 'undefined') {
    analytics = window.analytics = window.analytics || [];

    if (!analytics.initialize) {
      if (analytics.invoked) {
        window.console && console.error && console.error('Segment snippet included twice.');
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
        analytics._writeKey = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY;
        analytics.load(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY);
      }
    }
  }

  isInitialized = true;
};

const getSegmentContext = () => ({
  page: {
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer,
  },
});

export const identifyUser = async (userId, traits = {}) => {
  await initSegment();
  analytics.identify(userId, traits, getSegmentContext());
};

export const trackPageView = async (pageName = null, properties = {}) => {
  await initSegment();
  const title = pageName || document.title;
  analytics.page(title, properties, getSegmentContext());
};

export const trackEvent = async (eventName, properties = {}) => {
  await initSegment();
  analytics.track(eventName, properties, getSegmentContext());
}; 