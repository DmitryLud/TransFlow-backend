import Trailer from "../models/trailer.js";

class TrailerService{
    async create (trailer) {
        const createdTrailer = await Trailer.create(trailer);
        return createdTrailer;
      }
    
      async getAll() {
        const trailers = await Trailer.find();
        return trailers;
      }
    
      async getOne(id) {
        if(!id){
            throw new Error('Id не указан');
        }
        const trailer = await Trailer.findById(id);
        return trailer;
      }
    
      async update(trailer) {
        if(!trailer._id){
            throw new Error('Id не указан');
        }
        const updatedTrailer = await Trailer.findByIdAndUpdate(trailer._id, trailer, {new: true});
        return updatedTrailer;
      }
    
      async delete(id) {
        if(!id){
            throw new Error('Id не указан');
        }
        const trailer = await Trailer.findByIdAndDelete(id);
        return trailer;
      }
}

export default new TrailerService();