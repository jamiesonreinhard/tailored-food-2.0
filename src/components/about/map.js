import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { useRouter } from "next/router";

const Map = ({ projects }) => {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const navigateToProject = (selectedProject) => {
    router.push({
      pathname: "/projects",
      query: { project: selectedProject.name, type: selectedProject.type },
    });
  };

  const outerContainerStyle = {
    width: "100%", // Ensure the container is full width
    maxWidth: "720px", // Set the maximum width
    margin: "auto", // Center the map horizontally
    position: "relative", // For absolute positioning of the inner div
  };

  const innerContainerStyle = {
    paddingBottom: "100%", // Maintain 1:1 aspect ratio
    height: "0", // Height starts at 0
  };

  return isLoaded && projects ? (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <GoogleMap
          mapContainerStyle={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          center={{ lat: projects[0]?.latitude, lng: projects[0]?.longitude }}
          zoom={2}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
          }}
        >
          {projects.map((project, index) => (
            <Marker
              key={index}
              icon={"/images/icons/greenMarker.svg"}
              position={{ lat: project.latitude, lng: project.longitude }}
              onClick={() => setSelectedProject(project)}
            />
          ))}
          {selectedProject && (
            <InfoWindow
              position={{
                lat: selectedProject.latitude,
                lng: selectedProject.longitude,
              }}
              onCloseClick={() => setSelectedProject(null)}
            >
              <div className="flex flex-col items-center gap-[4px]">
                <h2 className="font-bold">{selectedProject.name}</h2>
                <button
                  onClick={() => navigateToProject(selectedProject)}
                  className="text-green font-bold"
                >{`Project Details`}</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Map);
