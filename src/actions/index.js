export const GET_COLOR = 'GET_COLOR';
export const GET_PERCENT = 'GET_PERCENT';
export const ADD_COLOR = 'ADD_COLOR';
export const DELETE_COLOR = 'DELETE_COLOR';
export const LOAD_COLORS = 'LOAD_COLORS';
export const UPDATE_COLORS = 'UPDATE_COLORS'

import tinycolor2 from 'tinycolor2';
import db from '../db';

db.open().catch(function (e) {
    console.error("Open failed: " + e);
});

/*db.delete().then(() => {
    console.log("Database successfully deleted");
}).catch((err) => {
    console.error("Could not delete database");
}).finally(() => {
    // Do what should be done next...
});*/

export function addColor(colorCode) {
  return (dispatch) => {
        const addColor = { colorCode };
        db.table('color')
          .add(addColor)
          .then((id) => {
             dispatch({
               type: ADD_COLOR,
               payload: Object.assign({}, { id }, addColor),
             });
        });
      }
}

export function deleteColor(id) {
  return (dispatch) => {
      db.table('color')
        .delete(id)
        .then(() => {
          dispatch({
            type: DELETE_COLOR,
            payload: id,
          });
        });
    };
}


export function getColor(searchTerm) {
  const term = searchTerm;

  const t = tinycolor2(term);
  const hex = t.toHexString();
  const rgb = t.toRgbString();
  const hsl = t.toHslString();
  const hslObj = t.toHsl();

  const color = {
    'term': term,
    'hex': hex,
    'rgb': rgb,
    'hsl': hsl,
    'hslObj': hslObj
  }

  return {
    type: GET_COLOR,
    payload: color
  }
}

export function getPercent(currentPercent) {
  const percent = currentPercent;

  return {
    type: GET_PERCENT,
    payload: percent
  }
}

export function loadColors() {
  return (dispatch) => {
    db.table('color').toArray().then((colors) => {
      dispatch({
        type: LOAD_COLORS,
        payload: colors
      })
    })
  }
}

export function updateColors() {
  return (dispatch) => {
    db.table('color').toArray().then((colors) => {
      dispatch({
        type: UPDATE_COLORS,
        payload: colors
      })
    })
  }
}
