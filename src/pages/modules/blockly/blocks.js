import Blockly from 'blockly';
import 'blockly/javascript';

Blockly.Blocks['new_boundary_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("Boundary Function Name"), "Name");
        this.appendStatementInput("Content")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(15);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['new_boundary_function'] = function (block) {
    var text_name = block.getFieldValue('Name');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'Content');
    // TODO: Assemble JavaScript into code variable.
    var code = 'def ' + text_name + '(_object,**kwargs):\n' + statements_content + '\n';
    return code;
};

Blockly.Blocks['return'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("return");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['return'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'return ' + value_name + '\n';
    return code;
};


Blockly.Blocks['library'] = {
    init: function() {
        this.appendValueInput("NAME").setCheck(null).appendField("library:").appendField(new Blockly.FieldTextInput(""), "library");
        this.setColour(200);
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['library'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'return ' + value_name + '\n';
    return code;
};

Blockly.Blocks['lib'] = {
    init: function() {
      this.appendValueInput("lib_name")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("library");
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Provide the name of library you want to load into the system");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['lib'] = function(block) {
    var value_lib_name = Blockly.JavaScript.valueToCode(block, 'lib_name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'return ' + value_lib_name + '\n';
    return code;
};

Blockly.Blocks['req'] = {
    init: function() {
      this.appendValueInput("lib_name")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("require");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Provide the name of library you want to load into the system");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['req'] = function(block) {
    var value_lib_name = Blockly.JavaScript.valueToCode(block, 'lib_name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['tallydata'] = {
    init: function() {
      this.appendValueInput("substance")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("tally ( ~")
          .appendField(new Blockly.FieldVariable("substance"), "substance")
          .appendField(", data = ")
          .appendField(new Blockly.FieldVariable("HELPrct"), "HELPrct");
      this.setColour(230);
   //this.setInputsInline(true);
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setTooltip("\"tally(~ substance, data = HELPrct)\" enter your \"substance\" after \"~\", and enter the name of the dataset in the format of \"data = xyz\"");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['tallydata'] = function(block) {
    var variable_substance = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('substance'), Blockly.Variables.NAME_TYPE);
    var variable_helprct = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('HELPrct'), Blockly.Variables.NAME_TYPE);
    var value_substance = Blockly.JavaScript.valueToCode(block, 'substance', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};