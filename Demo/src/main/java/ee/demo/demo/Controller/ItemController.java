package ee.demo.demo.Controller;

import ee.demo.demo.model.Item;
import ee.demo.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemService itemService;
    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    }
    @PostMapping("items")
    public String postItem(@RequestBody Item item){
        itemService.saveItem(item);
        return "Edukalt  yles laetud!" + item.getName();
    }

}
