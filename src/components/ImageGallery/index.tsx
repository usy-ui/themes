import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../types/common-comp.props";

type Image = {
  url: string;
  shape: "big" | "wide" | "tall" | "normal";
  alt?: string;
};

type ImageGalleryProps = {
  images: Image[];
} & CommonCompProps;

export const ImageGallery: FC<ImageGalleryProps> = ({
  name = "image-gallery",
  images,
  className,
  testId = name,
}) => {
  return (
    <div className={clsx("usy-image-gallery", className)} data-testid={testId}>
      {images.map(({ url, shape, alt }) => (
        <div key={url} className={clsx("image-container", shape)}>
          <img src={url} className="image" alt={alt} />
        </div>
      ))}
    </div>
  );
};
