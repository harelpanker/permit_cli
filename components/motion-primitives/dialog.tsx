'use client';
import { AnimatePresence, motion, Transition, Variants } from 'motion/react';
import React, { createContext, useContext, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useId } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { usePreventScroll } from '@/components/motion-primitives/usePreventScroll';

import styles from './styles.module.css';

const DialogContext = createContext<{
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	dialogRef: React.RefObject<HTMLDialogElement | null>;
	variants: Variants;
	transition?: Transition;
	ids: {
		dialog: string;
		title: string;
		description: string;
	};
	onAnimationComplete: (definition: string) => void;
	handleTrigger: () => void;
} | null>(null);

const defaultVariants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.9,
	},
	animate: {
		opacity: 1,
		scale: 1,
	},
};

const defaultTransition: Transition = {
	ease: 'easeOut',
	duration: 0.2,
};

export type DialogProps = {
	children: React.ReactNode;
	variants?: Variants;
	transition?: Transition;
	className?: string;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	open?: boolean;
};

function Dialog({
	children,
	variants = defaultVariants,
	transition = defaultTransition,
	defaultOpen,
	onOpenChange,
	open,
}: DialogProps) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen || false);
	const dialogRef = useRef<HTMLDialogElement>(null);
	const isOpen = open !== undefined ? open : uncontrolledOpen;

	// prevent scroll when dialog is open on iOS
	usePreventScroll({
		isDisabled: !isOpen,
	});

	const setIsOpen = React.useCallback(
		(value: boolean) => {
			setUncontrolledOpen(value);
			onOpenChange?.(value);
		},
		[onOpenChange]
	);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		const handleCancel = (e: Event) => {
			e.preventDefault();
			if (isOpen) {
				setIsOpen(false);
			}
		};

		dialog.addEventListener('cancel', handleCancel);
		return () => {
			dialog.removeEventListener('cancel', handleCancel);
			document.body.classList.remove('overflow-hidden');
		};
	}, [dialogRef, isOpen, setIsOpen]);

	useEffect(() => {
		if (isOpen && dialogRef.current) {
			dialogRef.current.showModal();
		}
	}, [isOpen]);

	const handleTrigger = () => {
		setIsOpen(true);
	};

	const onAnimationComplete = (definition: string) => {
		if (definition === 'exit' && !isOpen) {
			dialogRef.current?.close();
		}
	};

	const baseId = useId();
	const ids = {
		dialog: `motion-ui-dialog-${baseId}`,
		title: `motion-ui-dialog-title-${baseId}`,
		description: `motion-ui-dialog-description-${baseId}`,
	};

	return (
		<DialogContext.Provider
			value={{
				isOpen,
				setIsOpen,
				dialogRef,
				variants,
				transition,
				ids,
				onAnimationComplete,
				handleTrigger,
			}}>
			{children}
		</DialogContext.Provider>
	);
}

export type DialogTriggerProps = {
	children: React.ReactNode;
	className?: string;
};

function DialogTrigger({ children, className }: DialogTriggerProps) {
	const context = useContext(DialogContext);
	if (!context) throw new Error('DialogTrigger must be used within Dialog');

	return (
		<button
			onClick={context.handleTrigger}
			className={cn(
				'inline-flex items-center justify-center rounded-md text-sm font-medium',
				'focus-visible:outline-hidden transition-colors focus-visible:ring-2',
				'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
				className
			)}>
			{children}
		</button>
	);
}

export type DialogPortalProps = {
	children: React.ReactNode;
	container?: HTMLElement | null;
};

function DialogPortal({
	children,
	container = typeof window !== 'undefined' ? document.body : null,
}: DialogPortalProps) {
	const [mounted, setMounted] = React.useState(false);
	const [portalContainer, setPortalContainer] = React.useState<HTMLElement | null>(null);

	useEffect(() => {
		setMounted(true);
		setPortalContainer(container || document.body);
		return () => setMounted(false);
	}, [container]);

	if (!mounted || !portalContainer) {
		return null;
	}

	return createPortal(children, portalContainer);
}
export type DialogContentProps = {
	children: React.ReactNode;
	className?: string;
	container?: HTMLElement;
};

function DialogContent({ children, className, container }: DialogContentProps) {
	const context = useContext(DialogContext);
	if (!context) throw new Error('DialogContent must be used within Dialog');
	const { isOpen, setIsOpen, dialogRef, variants, transition, ids, onAnimationComplete } = context;

	const content = (
		<AnimatePresence mode='wait'>
			{isOpen && (
				<motion.dialog
					key={ids.dialog}
					ref={dialogRef as React.RefObject<HTMLDialogElement>}
					id={ids.dialog}
					aria-labelledby={ids.title}
					aria-describedby={ids.description}
					aria-modal='true'
					role='dialog'
					onClick={(e) => {
						if (e.target === dialogRef.current) {
							setIsOpen(false);
						}
					}}
					initial='initial'
					animate='animate'
					exit='exit'
					variants={variants}
					transition={transition}
					onAnimationComplete={onAnimationComplete}
					className={cn(
						'bg-theme-dac3ff fixed left-1/2 top-1/2 w-[94svw] max-w-[52.7rem] -translate-x-1/2 -translate-y-1/2 transform overflow-visible rounded-xl rounded-tr-none',
						'backdrop:backdrop-blur-xs backdrop:bg-theme-white/10',
						'open:flex open:flex-col',
						'border-theme-base-content min-h-[45.5rem] border-2 p-2 lg:min-h-[30.625rem] lg:p-3',
						className
					)}>
					{children}
				</motion.dialog>
			)}
		</AnimatePresence>
	);

	return <DialogPortal container={container}>{content}</DialogPortal>;
}

export type DialogHeaderProps = {
	children: React.ReactNode;
	className?: string;
};

function DialogHeader({ children, className }: DialogHeaderProps) {
	return <div className={cn('', className)}>{children}</div>;
}

export type DialogTitleProps = {
	children: React.ReactNode;
	className?: string;
};

function DialogTitle({ children, className }: DialogTitleProps) {
	const context = useContext(DialogContext);
	if (!context) throw new Error('DialogTitle must be used within Dialog');

	return (
		<h2 id={context.ids.title} className={cn('', className)}>
			{children}
		</h2>
	);
}

export type DialogDescriptionProps = {
	children: React.ReactNode;
	className?: string;
};

function DialogDescription({ children, className }: DialogDescriptionProps) {
	const context = useContext(DialogContext);
	if (!context) throw new Error('DialogDescription must be used within Dialog');

	return (
		<p id={context.ids.description} className={cn('', className)}>
			{children}
		</p>
	);
}

export type DialogCloseProps = {
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
};

function DialogClose({ className, children, disabled }: DialogCloseProps) {
	const context = useContext(DialogContext);
	if (!context) throw new Error('DialogClose must be used within Dialog');

	return (
		<button
			onClick={() => context.setIsOpen(false)}
			type='button'
			aria-label='Close dialog'
			className={cn(styles.x, className)}
			disabled={disabled}>
			{children || <X className='size-8 text-theme-base-content' />}
			<span className='sr-only'>Close</span>
		</button>
	);
}

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose };
