import { useState, ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

import { Icon, Item, ItemButton, Text, Wrapper } from '../styles/root';

const Container = styled.div`
  position: relative;
  width: 260px;
`;

interface dataType {
  city: string;
  state: string;
}

interface propsType {
  options: dataType[];
}

interface stateType {
  text: string;
  selections: dataType[];
}

const initialState = {
  text: '',
  selections: [],
};

const AutoComplete: FC<propsType> = ({ options }) => {
  const [search, setSearch] = useState<stateType>(initialState);
  const [visible, setVisible] = useState(true);
  const { selections } = search;

  const onSelectOption = (option: dataType) => {
    setVisible(false);
    setSearch({ text: `${option.city} / ${option.state}`, selections: [] });
  };

  const clearInputText = () => {
    setSearch({
      text: '',
      selections: [],
    });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    let selections: dataType[] = [];
    if (text.length > 0) {
      const regex = new RegExp(`^${text}`, 'i');
      selections = options
        .sort()
        .filter((item: dataType) => regex.test(item.city));
    }
    setVisible(true);
    setSearch({ selections, text });
  };

  return (
    <Container>
      <div
        onClick={() => setVisible(false)}
        style={{
          display: visible ? 'block' : 'none',
          width: '160vw',
          height: '160vh',
          backgroundColor: 'transparent',
          position: 'fixed',
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      />
      <div>
        <Text
          id='input'
          autoComplete='off'
          value={search.text}
          onChange={onInputChange}
          type={'text'}
          style={{ backgroundColor: 'white' }}
        />
        {search.text ? (
          <Icon>
            <FaTimes onClick={clearInputText} />
          </Icon>
        ) : null}
      </div>
      {selections.length > 0 && visible && (
        <Wrapper style={{ backgroundColor: 'white' }}>
          {selections.map((item: dataType, index) => (
            <Item key={`${index}-${item.city}-${item.state}`}>
              <ItemButton key={item.state} onClick={() => onSelectOption(item)}>
                {item.city} / {item.state}
              </ItemButton>
            </Item>
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default AutoComplete;
