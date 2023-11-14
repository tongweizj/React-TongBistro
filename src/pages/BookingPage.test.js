import { render, screen } from "@testing-library/react";
import { fetchAPI, submitAPI } from "../utils/Api";
test("test: get back from fetachAPI", () => {
  const initDate = new Date();
  const dateData = fetchAPI(initDate);
  // 判断是否返回一个非空的数组
  expect(dateData.length).not.toBe(0);
});
