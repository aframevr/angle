/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * {{ prettyName }} component for A-Frame.
 */
AFRAME.registerComponent('{{ shortName }}', {
  /**
   * Component names specified in the dependencies array will be initialized
     left-to-right before initializing the current component.
   */
  dependencies: [],

  /**
   * Defines and describes the property or properties of the component.
   */
  schema: {},

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () { },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (time, timeDelta) { },

  /**
   * Like tick, but called after the scene has rendered
   */
  // tock: function (time, timeDelta, camera) { },
  
  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { },
  
  /**
   * Called on every update in order to check if the schema needs to be
   * dynamically modified
   */
  // updateSchema (data) { }
});
