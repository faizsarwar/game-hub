import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
    onSelectOrder: (sortOrder: string)=> void;
    sortOrder: string;
}



const SortSelector = ({onSelectOrder,sortOrder}: props) => {
    const SortOrder = [
        {value: '', label: 'Relevence'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'}, 
    ] 
    const currentSortOrder = ()=> SortOrder.find((order)=> order.value === sortOrder)

    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order By: {currentSortOrder()?.label || "Relevance"}
          </MenuButton>
          <MenuList>
            {/* {data.map((platform) => (
              <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
            ))} */}
            {SortOrder.map((item)=><MenuItem onClick={()=>onSelectOrder(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>)}
          </MenuList>
        </Menu>
      );
}

export default SortSelector