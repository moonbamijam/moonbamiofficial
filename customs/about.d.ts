export type AboutType = {
  _id: string
  image: {
    data: Buffer,
    contentType: string
  },
  title: string,
  desc: string,
  name: string,
  nickname: string,
  age: string,
  birthday: string,
  sex: string,
  nationality: string,
  status: string,
  languages: string
}