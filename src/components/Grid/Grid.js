import styled, { css } from "styled-components";

const setSpacing = (side, axis = 0) => {
  const value = side || axis;
  return typeof value === "number" ? `${value}rem` : `${value}`;
};

const setWidth = value => (value ? `${100 / value}%` : "auto");

const paddings = css`
  padding-top: ${({ pt, py }) => setSpacing(pt, py)};
  padding-bottom: ${({ pb, py }) => setSpacing(pb, py)};
  padding-left: ${({ pl, px }) => setSpacing(pl, px)};
  padding-right: ${({ pr, px }) => setSpacing(pr, px)};
`;

const margins = css`
  margin-top: ${({ mt, my }) => setSpacing(mt, my)};
  margin-bottom: ${({ mb, my }) => setSpacing(mb, my)};
  margin-left: ${({ ml, mx }) => setSpacing(ml, mx)};
  margin-right: ${({ mr, mx }) => setSpacing(mr, mx)};
`;

export const Container = styled.div`
  max-width: ${({ theme, size = "xl" }) => `${theme.breakpoints[size]}px`};
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: ${({ wrap = "initial" }) => `${wrap}`};
  align-items: ${({ alignItems = "initial" }) => `${alignItems}`};
  justify-content: ${({ justifyContent = "initial" }) => `${justifyContent}`};
  flex-direction: ${({ direction = "row" }) => `${direction}`};
`;

export const Item = styled.div`
  ${paddings};
  ${margins};
  @media (min-width: 0px) {
    width: ${({ sm }) => setWidth(sm)};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    width: ${({ md, sm }) => setWidth(md || sm)};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    width: ${({ lg, md, sm }) => setWidth(lg || md || sm)};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    width: ${({ xl, lg, md, sm }) => setWidth(xl || lg || md || sm)};
  }
`;
