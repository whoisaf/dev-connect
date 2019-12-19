/**
 *  useModal
 *
 *  @type Custom Hook
 *  @desc handles modal state
 */

import { useState } from "react";

export default () => {
  /* 
    State
  */
  const [show, setShow] = useState(false) as any;

  /* 
    Handling functions
  */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggle = () => {
    if (!show) {
      handleShow();
    } else {
      handleClose();
    }
  };

  /* 
    Return data for component consumption
  */
  return {
    show,
    setShow,
    handleClose,
    handleShow,
    toggle
  };
};
