{
  description = "Nix devshells!";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
  in {
    devShells.${system} = {
      simple = pkgs.mkShell {
        packages = [pkgs.hello];
        shellHook = ''
          ${pkgs.hello}/bin/hello
        '';
      };

      default = pkgs.mkShell {
        packages = with pkgs; [
          zsh
          nodejs
        ];

        shellHook = ''
          exec zsh
        '';
      };
    };
  };
}
