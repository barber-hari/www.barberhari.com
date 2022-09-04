import React, { FC } from 'react';
import { Style } from 'models/Style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as $ from './Artwork.styled';
import Path from '../../models/Path';

export interface ArtworkProps {
  styles: Style[];
}

const Artwork: FC<ArtworkProps> = props => {
  const { styles } = props;

  const router = useRouter();

  const routingHandler = ({ target }: React.MouseEvent) => {
    target instanceof HTMLImageElement &&
      router.push(`${Path.STYLES}/${target.dataset.id}`);
  };

  return (
    <$.Wrapper>
      <$.Container>
        <$.Masonry onClick={routingHandler}>
          {styles.map(({ id, thumb, title }) => (
            <$.Images key={`image-${id}`}>
              <Link href={`${Path.STYLES}/${id}`}>{title}</Link>
              <Image
                data-id={id}
                key={`image-${id}-${thumb}`}
                src={`/styles/${id}/${thumb}`}
                loading="lazy"
                layout="fill"
                alt={title}
              />
            </$.Images>
          ))}
        </$.Masonry>
      </$.Container>
    </$.Wrapper>
  );
};

export default Artwork;
