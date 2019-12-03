import CharacterController from "./CharacterController";

export default [
  {
    path: "/characters",
    method: "post",
    handler: (req, res) => CharacterController.getCharacters(req, res)
  }
];
