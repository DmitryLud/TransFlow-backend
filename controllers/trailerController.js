import TrailerService from "../services/TrailerService.js";

class TrailerController {
  async create (req, res) {
    try{
        const trailer = await TrailerService.create(req.body);
        res.json(trailer);
    }
    catch(e){
        res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
        const trailers = await TrailerService.getAll();
        return res.json(trailers);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
        const trailer = await TrailerService.getOne(req.params.id);
        return res.json(trailer);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
        const updatedTrailer = await TrailerService.update(req.body)
        return res.json(updatedTrailer);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
        const trailer = await TrailerService.delete(req.params.id)
        return res.json(trailer);
    } catch (e) {
        res.status(500).json(e)
    }
  }

}

export default new TrailerController();