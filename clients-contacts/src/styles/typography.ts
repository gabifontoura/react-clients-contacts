import styled, { css } from "styled-components";
import BaseText from "./BaseText";

interface iStyledTextProps{
    justifyContent?:string;
    textAlign?: string;
    fontWeight?: number;
    fontSize?:string;
    color?:string;
}

export const StyledText = styled(BaseText)<iStyledTextProps>`
  
  justify-content: ${({ justifyContent }) => justifyContent};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: var( --color-grey-500);
  font-size: ${({ fontSize }) => {

    switch (fontSize) {
      case "one":
        return css`
          font-size: 3rem;
          color: var( --color-blue-900);

        `;
      case "two":
        return css`
          font-size: 2.5rem;
          text-overflow: ellipsis;
          color: var( --color-blue-900);

        `;
      case "three":
        return css`
          font-size: 5rem;
          text-overflow: ellipsis;

        `;
         case "four":
          return css`
            font-size: 4rem;
            text-overflow: ellipsis;

          `;

      case "bodyText":
        return css`
          font-size: var(--font-size-text-2);
          font-size: 1.6rem;

        `;
      case "warnText":
        return css`
          font-size: var(--font-size-text-2);
          color: var(var( --color-blue-100));

        `;
    }
  }};
`;