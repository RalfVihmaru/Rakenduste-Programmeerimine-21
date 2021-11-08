package ee.hw1_final.hw1_final.service;

import ee.hw1_final.hw1_final.Repository.ItemRepository;
import ee.hw1_final.hw1_final.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public List<Item> getItems(){
        return itemRepository.findAll();
    }

    public void saveItem(Item item) {
        itemRepository.save(item);
    }
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
    public void editItem(Item item) {
        itemRepository.save(item);
    }
    public Item getOneItem(Long id) throws Exception{
        if(itemRepository.findById(id).isPresent()) {
            return itemRepository.findById(id).get();
        }
        throw new Exception();
    }
}
