// Dependencies
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

/**
 * The properties definition for {@link Confirm}
 */
export interface ConfirmProps {
  /**
   * Check if modal is open.
   */
  open: boolean;

  /**
   * Callback to on close.
   */
  onClose: () => void;

  /**
   * Callback to on confirm.
   */
  onConfirm: () => void;
}

/**
 * Confirm modal component.
 * @param props The properties of component.
 * @returns The modal confirm component.
 */
export function Confirm(props: ConfirmProps): React.ReactElement {
  const { open, onClose, onConfirm } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={onConfirm} color="primary" autoFocus>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

export default React.memo(Confirm);