import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeTeaFields {
  name: EntryFields.Symbol;
  images: Asset[];
}

export type TypeTea = Entry<TypeTeaFields>;
