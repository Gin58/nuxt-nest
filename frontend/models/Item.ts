export interface Item {
  id: number
  name: string
  done: boolean
}

export default class Items {
  private _props: Item

  constructor(props: Item) {
    this._props = props
  }

  get id(): number {
    return this._props.id
  }

  get name(): string {
    return this._props.name
  }

  set name(value: string) {
    this._props.name = value
  }

  get done(): boolean {
    return this._props.done
  }

  set done(value: boolean) {
    this._props.done = value
  }
}