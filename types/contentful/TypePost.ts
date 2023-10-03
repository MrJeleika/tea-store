import type { Entry, EntryFields } from 'contentful';

export interface TypePostFields {
  title: EntryFields.Symbol;
  text: EntryFields.RichText;
  num?: EntryFields.Integer;
}

export type TypePost = Entry<TypePostFields>;
