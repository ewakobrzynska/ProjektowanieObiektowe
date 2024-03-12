program ex1;

var
  lista_liczb: array[1..50] of Integer;

procedure GenerujLosoweLiczby(od, do_: Integer; ile: Integer);
var
  i: Integer;
begin
  // init
  Randomize;

  // generate
  for i := 1 to ile do
  begin
    lista_liczb[i] := Random(do_ - od + 1) + od;
  end;
end;


procedure WyswietlLiczby(ile: Integer);
var
  i: Integer;
begin
  for i := 1 to ile do
  begin
    write(lista_liczb[i], ' ');
  end;
  writeln;
end;

procedure SortujLiczby(ile: Integer);
var
  i, j, temp: Integer;
begin
  for i := 1 to ile - 1 do
  begin
    for j := 1 to ile - i do
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
  GenerujLosoweLiczby(1, 100, 50); 
  WyswietlLiczby(50);
  SortujLiczby(50);
  WyswietlLiczby(50);
end.
