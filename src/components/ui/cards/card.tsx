import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './card.module.scss'

type CardProps = ComponentPropsWithoutRef<'div'>

/**
 * A flexible and reusable card component that wraps its children
 * in a styled `div` element. The card can be customized with additional
 * CSS classes and all standard `div` element props.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card.
 * @param {string} [props.className] - Additional class names to customize the card's styling.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to the underlying `div` element.
 * @returns {JSX.Element} The rendered card component.
 *
 * @example
 * // Basic usage:
 * <Cards>
 *   <p>Card Content</p>
 * </Cards>
 *
 * @example
 * // With additional class names:
 * <Cards className="custom-class">
 *   <p>Card Content with custom styling</p>
 * </Cards>
 */

export const Card = forwardRef<ElementRef<'div'>, CardProps>(
  ({ children, className, ...rest }: CardProps, ref) => {
    const classNames = clsx(styles.card, className)

    return (
      <div ref={ref} {...rest} className={classNames}>
        {children}
      </div>
    )
  }
)
