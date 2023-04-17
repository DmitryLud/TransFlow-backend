import Client from "../models/client.js";

class ClientService{
    async create (client) {
        const createdClient = await Client.create(client);
        return createdClient;
      }
    
      async getAll() {
        const clients = await Client.find();
        return clients;
      }
    
      async getOne(id) {
        if(!id){
            throw new Error('Id не указан');
        }
        const client = await Client.findById(id);
        return client;
      }
    
      async update(client) {
        if(!client._id){
            throw new Error('Id не указан');
        }
        const updatedClient = await Client.findByIdAndUpdate(client._id, client, {new: true});
        return updatedClient;
      }
    
      async delete(id) {
        if(!id){
            throw new Error('Id не указан');
        }
        const client = await Client.findByIdAndDelete(id);
        return client;
      }
}

export default new ClientService();