import React, { useEffect, useState } from "react";

const SPREADSHEET_ID = "1dHtUZyfdWecCzOCdMa9IIxql7wfliLRNKLdpvbBcrQw"; // 스프레드시트 ID를 여기에 입력
const API_KEY = "AIzaSyBfdWEWEDbO6mlGToeaBz5ZNUqrAfR4Zm0"; // Google Developers Console에서 생성한 API 키를 여기에 입력

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/시트1?key=${API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // 여기에서 응답 데이터의 형태를 확인
        const rows = data.values?.slice(0) || [];
        setData(rows);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data.map((row, index) => (
        <div key={index}>{row.join(", ")}</div>
      ))}
    </div>
  );
}

export default Main;
