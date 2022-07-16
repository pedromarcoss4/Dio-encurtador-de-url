export class URL {
    required!: true 
    hash!: string
    originURL!: string
    shortURL!: string

}

export URLModel = new URL().getModelforClass(URL)