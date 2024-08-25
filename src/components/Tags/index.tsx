import { ChangeEvent, forwardRef, useRef, useState } from "react";

import clsx from "clsx";

import { useNameMemo } from "@src/hooks";

import { CommonCompProps, WidthProps } from "../../@types";
import { FieldTitle, PureFieldTitleProps } from "../_internal/FieldTitle";
import { CloseCircleSolidIcon } from "../Icon";

type PureTagsProps = {
  title?: string;
  tags?: string[];
  placeholder?: string;
  onAdd?: (tags: string[], tag: string) => void;
  onRemove?: (tags: string[], tag: string) => void;
};

type TagsProps = PureTagsProps &
  PureFieldTitleProps &
  WidthProps &
  CommonCompProps;

export const Tags = forwardRef<HTMLDivElement, TagsProps>(function Tags(
  {
    name = "tags",
    title,
    tags: initTags,
    placeholder = "New tag...",
    hasAsterisk,
    widthProps,
    onAdd,
    onRemove,
    className,
    testId = name,
  },
  ref
) {
  const [tags, setTags] = useState(initTags || []);
  const [inputTag, setInputTag] = useState("");
  const inputTagRef = useRef<HTMLInputElement>(null);
  const { nameMemo } = useNameMemo(name, "tags");

  const handleInputTagChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputTag(target.value);
  };

  const addTag = () => {
    if (inputTag && !tags.includes(inputTag)) {
      const updatedTags = [...tags, inputTag];
      onAdd?.(updatedTags, inputTag);
      setTags(updatedTags);
      inputTagRef.current?.focus();
    }

    setInputTag("");
  };

  const removeTag = (selectedTag: string) => {
    const updatedTags = [...tags].filter((tagItem) => tagItem !== selectedTag);
    onRemove?.(updatedTags, selectedTag);
    setTags(updatedTags);
  };

  return (
    <div
      ref={ref}
      className={clsx("usy-tags-container", className)}
      data-testid={testId}
    >
      {title && (
        <FieldTitle
          name={nameMemo}
          title={title}
          hasAsterisk={hasAsterisk}
          testId={`${testId}-title`}
        />
      )}
      <div
        className={clsx("tags-container", className)}
        style={{ ...widthProps }}
      >
        {tags.map((tagItem) => {
          return (
            <span
              key={tagItem}
              className="tag-item"
              data-testid={`${testId}-tag-item`}
            >
              {tagItem}
              <CloseCircleSolidIcon onClick={() => removeTag(tagItem)} />
            </span>
          );
        })}
        <input
          value={inputTag}
          placeholder={placeholder}
          onChange={handleInputTagChange}
          onBlur={addTag}
          ref={inputTagRef}
          className="tag-input"
          data-testid={`${testId}-tag-input`}
        />
      </div>
    </div>
  );
});
