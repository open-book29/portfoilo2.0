import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Hr,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  message,
  senderEmail
}) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-200 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-lg">
              <Heading className="leading-tight">You recevied the following message from the concat form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
};
