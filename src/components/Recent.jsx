"use client";
import { Heading, Text } from "@chakra-ui/react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineIcon,
  TimelineTrack,
  TimelineContent,
  PersonaAvatar,
} from "@saas-ui/react";

const Recent = () => {
  return (
    <div>
      <Text marginBottom="1rem" fontSize="1.5rem" fontWeight="600">
        Recent Activity
      </Text>
      <Timeline variant="outline">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineIcon>
              <PersonaAvatar
                name="Nicholas Runolfsdottir V"
                size="xs"
                presence="online"
              />
            </TimelineIcon>
            <TimelineTrack />
          </TimelineSeparator>
          <TimelineContent pt="2" px="3">
            <div>
              <Text fontSize="lg" color="black" _dark={{ color: "white" }}>
                Maxime_Nienow
              </Text>{" "}
              <Text color="muted">signed up.</Text>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineIcon>
              <PersonaAvatar name="Clementine Bauch" size="xs" presence="dnd" />
            </TimelineIcon>
            <TimelineTrack />
          </TimelineSeparator>
          <TimelineContent pt="2" px="3">
            <div>
              <Text fontSize="lg" color="black" _dark={{ color: "white" }}>
                Samantha
              </Text>{" "}
              <Text color="muted">subscription changed to </Text>{" "}
              <Text color="black"> 12_PREMIUM</Text>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineIcon>
              <PersonaAvatar
                name="Leanne Graham"
                size="xs"
                presence="offline"
              />
            </TimelineIcon>
            <TimelineTrack />
          </TimelineSeparator>
          <TimelineContent pt="2" px="3">
            <div>
              <Text fontSize="lg" color="black" _dark={{ color: "white" }}>
                Bret
              </Text>{" "}
              <Text color="muted">subscription cancelled. </Text>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Recent;
