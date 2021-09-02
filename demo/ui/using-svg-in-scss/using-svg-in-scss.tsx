import React from 'react';
import styles from './using-svg-in-scss.module.scss';

export type UsingSvgInScssProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function UsingSvgInScss({ text }: UsingSvgInScssProps) {
  return (
    <div>
      {text}
      <div className={styles.svgImage} />
    </div>
  );
}
