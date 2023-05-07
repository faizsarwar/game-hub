import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface props {
    onSearch: (searchText: string) => void;
}

const SearchInputs = ({onSearch}: props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games ...."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInputs;
