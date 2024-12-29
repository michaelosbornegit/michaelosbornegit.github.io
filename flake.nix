{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-24.05";
  };

  outputs = { self, nixpkgs, ... }:
    let
      lib = nixpkgs.lib;
      systems = [ "aarch64-linux" "x86_64-linux" "x86_64-darwin" ];
      devShellForSystem = system: let
        pkgs = import nixpkgs { 
          inherit system; 
          # config.allowUnfree = true; # Needed for terraform and other "unfree" packages
        };
      in pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_22
        ];
      };
    in
    {
      devShells = lib.listToAttrs (map (system: {
        name = system;
        value = {
          default = devShellForSystem system;
        };
      }) systems);
    };
}
