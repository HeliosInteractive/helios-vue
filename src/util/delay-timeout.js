/**
 * This function will allow you to prevent the timeout screen from appearing
 *
 * It sends a custom event that the timeout component sees as an action.
 * This will prevent it from popping up in the same way that someone tapping the screen would.
 */

const delayTimeout = () => {
  document.dispatchEvent(new CustomEvent(
    'customAwayEvent',
  ));
};

export default delayTimeout;
