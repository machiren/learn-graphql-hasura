export type FormattedDate = {
  datetime: string
  isNew: boolean
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  const formatDate: FormattedDate = { datetime: '', isNew: false }
  return formatDate
}
