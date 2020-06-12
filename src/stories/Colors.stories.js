import * as React from 'react'
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks'

export default {
  title    :'Colors',
  component:ColorPalette,
}

const storyParameters = {
 previewTabs: { 
    'canvas': { 
      hidden: true 
    },
  }
}

const THEME = [
  'primary',
  'secondary',
  'accent1',
  'accent2',
  'accent3'
]

const WHEEL = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'indigo',
  'azure',
  'blue',
  'violet',
  'pink'
]

const MODALS = [
  'success',
  'warning',
  'error'
]

const getColorMap = (prefix, list) => {
  const a = []
  list.forEach((color) => a.push({
    title :`${prefix}.${color}`,
    //subtitle:'',
    colors:[
      `var(--dark-${color})`,
      `var(--${color})`,
      `var(--light-${color})`,
      `var(--on-${color})`
    ]
  })
  )
  return a
}
const themeMap = getColorMap('theme', THEME)
const modalsMap = getColorMap('modals', MODALS)
const wheelMap = getColorMap('wheel', WHEEL)

export const Swatches = () => (
  <>
    <ColorPalette>
      { themeMap.map((e,i) =>
        <ColorItem
          key={i}
          { ...e }
        />
      ) }
    </ColorPalette>
    <ColorPalette>
      {
        wheelMap.map((e,i) =>
          <ColorItem
            key={i}
            { ...e }
          />
        ) }
    </ColorPalette>
    <ColorPalette>
      { modalsMap.map((e,i) =>
        <ColorItem
          key={i}
          { ...e }
        />
      ) }
    </ColorPalette>
  </>
)


export const Setters = () => {
  const setterTester = (MAP) => (
    MAP.map((e,i) =>
      <div
        className={ 'x-' + e }
        key={i}
      >
        <span style={{
          background:'var(--dark-x)',
          color     :'var(--on-x)',
        }}
        >
          Dark
        </span>
        <span style={{
          background:'var(--x)',
          color     :'var(--on-x)',
        }}
        >
          Base
        </span>
        <span style={{
          background:'var(--light-x)',
          color     :'var(--on-x)',
        }}
        >
          Light
        </span>
      </div>
    ))

  return (
  <>
    <p>Theme</p>
    { setterTester(THEME) }
    <p>Wheel</p>
    { setterTester(WHEEL) }
    <p>Modals</p>
    { setterTester(MODALS) }
  </>
) }

export const Getters = () => {

  const getterTester = (MAP) => (
    MAP.map((e,i) =>
      <>
        <div className={ 'x-' + e }>
          <span className={ 'b-dark-x c-on-x' }>Back Dark</span>
          <span className={ 'b-x c-on-x' }>Back Base</span>
          <span className={ 'b-light-x c-on-x' }>Back Light</span>
        </div>
        <br/>
        <div className={ 'y-' + e }>
          <span
            className={ 'd-dark-y c-dark-y' }
            style={{ borderWidth: '10px', borderStyle: 'solid' }}
          >
            Border dark
          </span>
          <span
            className={ 'd-y c-y' }
            style={{ borderWidth: '10px', borderStyle: 'solid' }}
          >
            Border base
          </span>
          <span
            className={ 'd-light-y c-light-y' }
            style={{ borderWidth: '10px', borderStyle: 'solid' }}
          >
            Border light
          </span>
        </div>
        <br/>
        <div className={ 'z-' + e }>
          <span className='c-dark-z'>Color Dark</span>
          <span className='c-z'>Color Base</span>
          <span className='c-light-z'>Color Light</span>
        </div>
      </>
    )) 

  return(
  <>
    { getterTester(THEME) }
    { getterTester(WHEEL) }
    { getterTester(MODALS) }
  </>
)}

Swatches.parameters = storyParameters
Setters.parameters = storyParameters
Getters.parameters = storyParameters
