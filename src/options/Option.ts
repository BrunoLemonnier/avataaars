export type OptionType =
  | 'skinColor'
  //
  | 'topType'
  | 'accessoriesType'
  | 'hatColor'
  //
  | 'hairColor'
  | 'facialHairType'
  | 'facialHairColor'
  //
  | 'clotheType'
  | 'clotheColor'
  | 'graphicType'
  //
  | 'eyeType'
  | 'eyebrowType'
  | 'mouthType'

export class Option {
  private _key: OptionType
  private _label: string

  get key(): OptionType {
    return this._key
  }

  get label(): string {
    return this._label
  }

  constructor({ key, label }: { key: OptionType; label: string }) {
    this._key = key
    this._label = label
  }
}

export default Option
