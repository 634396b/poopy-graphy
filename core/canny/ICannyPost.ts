export interface ICannyPost {
  _id: string
  authorID: string
  board: {
    _id: string
    name: string
  }
  commentCount: number
  created: Date | string
  details: string
  status: 'open' | 'closed'
  score: number
  urlName: string
  title: string
  viewerVote: number
}

export interface ICannyResponse {
  result: { posts: ICannyPost[]; hasNextPage: boolean }
  error: boolean
}
