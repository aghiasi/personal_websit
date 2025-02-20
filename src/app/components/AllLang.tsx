"use client";

import { IconButton } from "@mui/material";
import { useState } from "react";
export const AllLang = (prop: any) => {
  const [show, setShow] = useState<Array<string> | null>();
  const { url }: any = prop;
  if (show)
    return (
      <>
        <IconButton></IconButton>
        <div>
          <p>Languages Used in This Repo :</p>
          {show.map((items) => (
            <>
              <p>{items}</p>
            </>
          ))}
        </div>
      </>
    );
};
