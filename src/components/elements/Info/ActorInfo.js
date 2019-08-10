import React from 'react';
import Info, { Section } from './Info';

const ActorInfo = ({ name, profile_path, biography }) => (
  <Info title={name} thumb={profile_path}>
    <Section title='Biography'>{biography}</Section>
  </Info>
);

export default ActorInfo;
