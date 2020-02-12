import React from 'react'
import { ListOfCategories } from './components/ListOfCategorys'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </div>
)
