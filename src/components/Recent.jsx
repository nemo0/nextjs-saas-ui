import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineIcon,
  TimelineTrack,
  TimelineContent,
  PersonaAvatar,
} from "@saas-ui/react";

export function Recent() {
  return (
    <Card variant="solid" bg="transparent">
      <CardHeader pb="0">
        <Heading as="h3" size="md">
          Recent Activity
        </Heading>
      </CardHeader>
      <CardBody>
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
              <Text fontWeight="medium">Maxime_Nienow</Text>
              <Text color="muted">signed up.</Text>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineIcon>
                <PersonaAvatar
                  name="Clementine Bauch"
                  size="xs"
                  presence="dnd"
                />
              </TimelineIcon>
              <TimelineTrack />
            </TimelineSeparator>
            <TimelineContent pt="2" px="3">
              <Text fontWeight="medium">Samantha</Text>
              <Text color="muted">subscription changed to </Text>
              <Text>12_PREMIUM</Text>
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
              <Text fontWeight="medium">Bret</Text>
              <Text color="muted">subscription cancelled.</Text>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardBody>
    </Card>
  );
}
