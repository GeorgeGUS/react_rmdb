import React from 'react';
import { VIDEO_URL, getBackdropUrl } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Info, { Section, Footer } from './Info';
import Modal from '../Modal/Modal';
import Trailer from '../Trailer/Trailer';
import LinkBtn from '../LinkBtn/LinkBtn';
import Rating from '../Rating/Rating';

const ModalOpenBtn = ({ openModal }) => (
  <LinkBtn onClick={openModal}>
    <FontAwesomeIcon icon='play' size='1x' /> Play trailer
  </LinkBtn>
);

const MovieInfo = ({
  backdrop_path,
  poster_path,
  title,
  genres,
  overview,
  vote_average,
  credits,
  videos
}) => {
  const bgImage = {
    backgroundImage: `url(${getBackdropUrl(backdrop_path)})`
  };
  const trailer =
    videos.results.length > 0 &&
    videos.results.filter(({ type }) => type === 'Trailer')[0];
  const trailerURL = trailer ? `${VIDEO_URL}${trailer.key}` : null;
  const directors = credits.crew.filter(crew => crew.job === 'Director');
  const genresNames = genres.map(g => g.name).join(', ');

  return (
    <Info title={title} thumb={poster_path} style={bgImage}>
      {trailerURL && (
        <Modal title={'Play Trailer'} OpenBtn={ModalOpenBtn}>
          <Trailer trailerURL={trailerURL} title={title} />
        </Modal>
      )}
      <Section title='Overview'>{overview}</Section>
      <Footer>
        <Section title='Genres'>{genresNames}</Section>
        <Section title='IMDB rating'>
          <Rating value={vote_average} />
        </Section>
        <Section title={directors.length > 1 ? 'Directors' : 'Director'}>
          {directors.map(({ name }) => name).join(', ')}
        </Section>
      </Footer>
    </Info>
  );
};

export default MovieInfo;
