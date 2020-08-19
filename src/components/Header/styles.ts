import styled, { css } from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  transition: 0.1s opacity;

  &:focus,
  &:hover {
    opacity: 0.3;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;

    width: 100%;

    &:focus {
      width: 318px;
      background-color: var(--search-placeholder);
    }
    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  flex-shrink: 0;

  cursor: pointer;

  margin-left: 10px;

  transition: 0.3s opacity;
  &:focus,
  &:hover {
    opacity: 0.3;
  }
`;

export const SunIcon = styled(FiSun)`
  ${iconCSS}
  &:focus,
  &:hover {
    fill: var(--border);
  }
`;
export const MoonIcon = styled(FiMoon)`
  ${iconCSS}

  &:focus,
  &:hover {
    fill: var(--border);
  }
`;
