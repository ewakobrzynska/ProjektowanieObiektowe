program ex1;

var
  lista_liczb: array[1..50] of Integer;

procedure GenerujLosoweLiczby();
var
  i: Integer;
begin
  // init
  Randomize;

  // generate
  for i := 1 to 50 do
  begin
    lista_liczb[i] := Random(101); // random 1 to 100
  end;
end;

procedure WyswietlLiczby();
var
  i: Integer;
begin
  for i := 1 to 50 do
  begin
    write(lista_liczb[i], ' ');
  end;
  writeln;
end;

procedure SortujLiczby();
var
  i, j, temp: Integer;
begin
  for i := 1 to 49 do
  begin
    for j := 1 to 50 - i do
    begin
      if lista_liczb[j] > lista_liczb[j + 1] then
      begin
        temp := lista_liczb[j];
        lista_liczb[j] := lista_liczb[j + 1];
        lista_liczb[j + 1] := temp;
      end;
    end;
  end;
end;

begin
  GenerujLosoweLiczby();
  WyswietlLiczby();
  SortujLiczby();
  WyswietlLiczby();
end.
