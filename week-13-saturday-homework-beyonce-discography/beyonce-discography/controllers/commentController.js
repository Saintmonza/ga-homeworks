import Album from '../models/album.js'

async function createComment(req, res, next) {
  
  const commentData = req.body
  const { id } = req.params

  try {
    const album = await Album.findById(id)

    if (!album) {
      return res.status(404).send({ message: 'Not found' })
    }

    const newComment = {
      ...req.body,
      createdBy: req.currentUser,
    }

    album.comments.push(commentData)

    const savedAlbum = await album.save()

    res.send(savedAlbum)
  } catch (err) {
    next(err)
  }
}

async function updateComment(req, res, next) {
  const { commentId, id } = req.params

  try {
    const album = await Album.findById(id)

    if (!album) {
      return res.status(404).send({ message: 'Not found' })
    }

    if (!comment.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized action' })
    }

    const comment = album.comments.id(commentId)

    comment.set(req.body)

    const savedAlbum = await album.save()

    res.send(savedAlbum)
  } catch (err) {
    next(err)
  }
}

async function deleteComment(req, res, next) {
  const { commentId, id } = req.params

  try {
    const album = await Album.findById(id)

    if (!album) {
      return res.status(404).send({ message: 'Not found' })
    }

    if (!comment.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized action' })
    }

    const comment = album.comments.id(commentId)

    comment.remove()

    const savedAlbum = await album.save()

    res.send(savedAlbum)
  } catch (err) {
    next(err)
  }
}

export default {
  createComment,
  updateComment,
  deleteComment,
}