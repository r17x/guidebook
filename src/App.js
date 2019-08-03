import React from 'react';
import AppDrawer from './AppDrawer.js'
import {StateProvider, useGlobalState } from '@evilfactory/global-state'
import FormProperty from 'components/FormProperty'
import ListProperty from 'components/ListProperty'

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PROPERTY': return {
            ...state,
            property: [
                ...state.property,
                action.property 
            ]
        } 
        default: return state
    }
}

const initialState = {
    property: [],
}
const AppChild = () => {
    function actionNewProperty(state,action, property){
        return action({
            type: 'ADD_PROPERTY',
            property,
        }) 
    }
   const [{property: data}, createNewProperty] = useGlobalState(actionNewProperty)
   return (
        <AppDrawer>
            <FormProperty data-testid="formProperty" onSubmit={createNewProperty}/>
            <ListProperty  data={data}/>
        </AppDrawer>
   )
}

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={AppReducer}>
        <AppChild/>
    </StateProvider>
  );
}
