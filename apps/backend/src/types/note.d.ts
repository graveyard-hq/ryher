interface ICreateNote {
    title: string,
    text: string,
    accountId: string,
}

interface IUpdateNoteById {
    title: string | undefined,
    text: string | undefined,
    id: string,
}

export { ICreateNote, IUpdateNoteById }