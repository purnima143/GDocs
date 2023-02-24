import Document from '../schema/documentSchema.js'

export const getDocument = async (id, fileName, username) => {
    if (id === null) return;

    const document = await Document.findById(id);

    if (document) return document;

    return await Document.create({ _id: id, data: "", fileName: fileName, username: username })
}

export const updateDocument = async (id, data) => {
    return await Document.findByIdAndUpdate(id, { data });
}

