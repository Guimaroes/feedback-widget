import { useState } from 'react';
import { Widget } from '../Widget';

import { FakeBody } from './FakeBody';
import { FakeFooter } from './FakeFooter';
import { FakeHeader } from './FakeHeader';

export function FakeApp() {
    const [theme, setTheme] = useState("");
  
    function handleChangeTheme() {
      if (theme) 
        setTheme("") 
      else 
        setTheme("dark")
    }

    return (
        <div className={theme}>
            <FakeHeader theme={theme} onChangeTheme={handleChangeTheme} />
            <FakeBody />
            <FakeFooter />
            <Widget />
        </div>
    )
}