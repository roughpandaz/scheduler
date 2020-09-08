import { renderHook, act } from "@testing-library/react-hooks";

import useApplicationData from "hooks/useApplicationData";
import axios from "axios";

jest.mock("axios");

test("The state object will maintain the same structure.", ()=>{
  const {result} = renderHook(()=>useApplicationData())

  expect(result.current.state.day).toBe("Monday");     
  expect(result.current.state.days).toEqual(expect.arrayContaining([]))
  expect(result.current.state.days).toEqual(expect.objectContaining({}))
})

test(" The setDay action can be used to set the current day. ", ()=>{
  const {result} = renderHook(()=>useApplicationData())
  
  act(() => result.current.setDay("Tuesday"));
  expect(result.current.state.day).toBe("Tuesday");     
})

test(" The bookInterview action makes an HTTP request and updates the local state. ", ()=>{
  const {result} = renderHook(()=>useApplicationData())
  
  // act(() => result.current.setDay("Tuesday"));
})

// test(" The cancelInterview action makes an HTTP request and updates the local state. ", ()=>{
  
// })
